import React from 'react';
import { Document, Page, StyleSheet, View } from '@react-pdf/renderer';
import parse from 'html-react-parser';

const styles = StyleSheet.create({
    body: {
        padding: 10,
    },
    text: {
        fontSize: 12,
        margin: 10,
    }
});

interface PdfDocumentProps {
    html: string;
}

const PdfDocument: React.FC<PdfDocumentProps> = ({ html }) => {
    return (
        <Document>
            <Page size="A4" style={styles.body}>
                <View>
                    {parse(html)}
                </View>
            </Page>
        </Document>
    );
}

export default PdfDocument;
