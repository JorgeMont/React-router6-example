import {useParams} from 'react-router-dom';
import { getInvoice } from '../data';

export default function Invoice() {
    let {invoiceId} = useParams();
    let invoice = getInvoice(parseInt(invoiceId, 10));

    return (
        <main style={{ padding: "1rem" }}>
            <h2>Total due: {invoice.amount}</h2>
            <p>
                {invoice.name}: {invoice.number}
            </p>
            <p>
                Due date: {invoice.due}
            </p>
        </main>
        );
  }