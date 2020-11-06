import './Card.styles.css'
export default function Card({ card }) {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>balance</th>
                        <th>cvv</th>
                        <th>created at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{card.balance}</td>
                        <td>{card.cvv}</td>
                        <td>{card.createdAt}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
