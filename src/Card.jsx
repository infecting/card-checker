import './Card.styles.css'
export default function Card({ card }) {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Card No.</th>
                        <th>Balance</th>
                        {card.cvv ? <th>CVV</th> : null}
                        {card.createdAt ? <th>Created At</th> : null}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{card.number}</td>
                        <td>{card.balance}</td>
                        {card.cvv ? <td>{card.cvv}</td> : null}
                        {card.createdAt ? <td>{card.createdAt}</td> : null}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
