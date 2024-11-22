import './infoRow.scss';

interface Info  {
    columnName: string;
    components: string[];
}

const footerInfo: Info [] = [

    {
        columnName: 'COMPANY',
        components: [ 'Home', 'Order', 'FAQ', 'Contact']
    },
    {
        columnName: 'TEMPLATE',
        components: [ 'Style Guide', 'Changelog', 'License', 'Webflow University']
    },
    {
        columnName: 'FLOWBASE',
        components: ['More Cloneables']
    }
];



export default function InfoRow () {
    return (
        <div className="footerInfo">
            {footerInfo.map((column) => (
                <div key={column.columnName} className="footerColumn">
                    <p className="columnName">{column.columnName}</p>
                    {column.components.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}

