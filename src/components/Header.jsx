
export default function Header() {
  return (
    <>
      <h1 style={{ textAlign: "center", color: "blue" }}>WELCOME TO SAU</h1>
      <div style={{ textAlign: "center" }}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/dti/sau/product">Product</a>
        <hr style={{ border: "0", height: "2px", backgroundColor: "#1760fd", width: "80%"}} />
      </div>
    </>
  );
}