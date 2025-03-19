const technologies = ['React', 'HTML', 'CSS', 'JavaScript', 'Redux', 'Node', 'Mongodb', 'Flask', 'Numpy', 'Pandas', 'DA', 'MYSQL', 'Django'];

const listContainer: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    listStyle: "none",
    padding: "20px",
};

const listStyling: React.CSSProperties = {
    border: "2px solid #4a90e2",
    borderRadius: "8px",
    background: "rgb(100, 150, 220)",
    padding: "10px 16px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
};

const hoverEffect = {
    ":hover": {
        background: "#4a90e2",
        transform: "scale(1.05)",
    },
};

const List = () => {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <p style={{ fontSize: "22px", fontWeight: "bold", color: "#333", marginBottom: "15px" }}>Skills</p>
            <ul style={listContainer}>
                {technologies.map((tech, index) => (
                    <li key={index} style={{ ...listStyling, ...hoverEffect }}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
