
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateCheckoutPDF = async (cartItems: any[], total: number, b2bData?: { ragioneSociale?: string; pIva?: string; noteGenerali?: string }) => {
    const doc = new jsPDF();

    // --- Header ---
    // Background
    doc.setFillColor(50, 50, 50); // Dark Gray
    doc.rect(0, 0, 210, 40, 'F');

    try {
        // Fetch and process logo
        const response = await fetch('/images/logo/logo.svg');
        let svgText = await response.text();

        // Replace the dark company color with white so it's visible on the dark bar
        // Based on the SVG: .cls-2 { fill: #18181b; }
        svgText = svgText.replace(/#18181b/g, '#ffffff');

        // Render SVG to a Canvas to get a PNG for better jsPDF compatibility
        const logoDataUrl = await new Promise<string>((resolve) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();

            // Scaled for better resolution (viewBox 623.59 x 76.2)
            const scale = 3;
            canvas.width = 623.59 * scale;
            canvas.height = 76.2 * scale;

            const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(svgBlob);

            img.onload = () => {
                if (ctx) {
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                }
                URL.revokeObjectURL(url);
                resolve(canvas.toDataURL('image/png'));
            };
            img.onerror = () => {
                URL.revokeObjectURL(url);
                resolve('');
            };
            img.src = url;
        });

        if (logoDataUrl) {
            // Aspect ratio ~8.18 (623.59 / 76.2)
            // Height ~12mm, Width ~98mm
            doc.addImage(logoDataUrl, 'PNG', 20, 16, 60, 7.3);
        } else {
            throw new Error("Logo conversion failed");
        }
    } catch (e) {
        console.warn("Falling back to text logo:", e);
        // Fallback: Brand "Ditta Ferrosi" as text if SVG fails
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('times', 'bold');
        doc.text('Ditta', 20, 25);
        doc.setTextColor(234, 88, 12);
        doc.setFont('helvetica', 'normal');
        doc.text('Ferrosi', 50, 25);
    }

    // Date
    doc.setFontSize(10);
    doc.setTextColor(200, 200, 200);
    doc.text(`Data: ${new Date().toLocaleDateString('it-IT')}`, 160, 25);

    // B2B Info
    if (b2bData?.ragioneSociale || b2bData?.pIva) {
        doc.setFontSize(10);
        doc.setTextColor(255, 255, 255);
        if (b2bData.ragioneSociale) {
            doc.text(b2bData.ragioneSociale.toUpperCase(), 20, 32);
        }
        if (b2bData.pIva) {
            doc.text(`P.IVA: ${b2bData.pIva}`, 20, 36);
        }
    }

    // --- Title ---
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Riepilogo Ordine', 20, 60);

    // --- Table ---
    const tableData = cartItems.map(item => [
        item.nome + (item.note ? `\nNota: ${item.note}` : ''),
        item.quantita.toString(),
        item.prezzo.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' }),
        (item.prezzo * item.quantita).toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })
    ]);

    autoTable(doc, {
        startY: 70,
        head: [['Prodotto', 'Q.tà', 'Prezzo Un.', 'Subtotale']],
        body: tableData,
        theme: 'grid',
        headStyles: { fillColor: [50, 50, 50], textColor: [255, 255, 255], fontStyle: 'bold' },
        styles: { font: 'helvetica', fontSize: 10, cellPadding: 4 },
        columnStyles: {
            0: { cellWidth: 'auto' },
            1: { cellWidth: 20, halign: 'center' },
            2: { cellWidth: 35, halign: 'right' },
            3: { cellWidth: 35, halign: 'right' },
        },
    });

    // --- Total ---
    const finalY = (doc as any).lastAutoTable.finalY + 20;

    doc.setFontSize(14);
    doc.setTextColor(50, 50, 50);
    doc.text('Totale Ordine:', 120, finalY);

    doc.setFontSize(16);
    doc.setTextColor(234, 88, 12); // Primary Orange
    doc.setFont('helvetica', 'bold');
    doc.text(total.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' }), 160, finalY);

    // General Notes
    if (b2bData?.noteGenerali) {
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.setFont('helvetica', 'bold');
        doc.text('Note dell\'ordine:', 20, finalY + 20);
        doc.setFont('helvetica', 'normal');
        const splitNotes = doc.splitTextToSize(b2bData.noteGenerali, 170);
        doc.text(splitNotes, 20, finalY + 26);
    }

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.setFont('helvetica', 'normal');
    doc.text('Per ordinare quanto richiesto va inviato il pdf a ordini@dittaferrosi.it', 20, 275);
    doc.text('Grazie per aver scelto Ditta Ferrosi.', 20, 280);
    doc.text('Contattaci: info@dittaferrosi.it', 20, 285);

    // Save
    doc.save('riepilogo_ordine_ditta_ferrosi.pdf');
};
