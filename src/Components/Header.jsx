const Header = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 20px rgba(10,15,30,1)",
      }}
    >
      <h1
        style={{
          color: "#333",
          fontSize: "50px",
          fontFamily: "Montserrat",
          fontWeight: 700,
          marginBottom: "5px",
          textAlign: "center",
          position: "sticky",
          top: 0,
          width: "100%",
        }}
      >
        Student Directory
      </h1>
      <p
        style={{
          color: "#555",
          lineHeight: "1.5",
          textAlign: "center",
          marginTop: "2px",
          fontSize: "16px",
          fontFamily: "Roboto",
        }}
      >
        A modern and user-friendly student management interface designed to
        simplify record keeping and improve accessibility.
      </p>
    </div>
  );
};
export default Header;
