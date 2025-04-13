export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Strata Manager</h1>
      <p>Manage your condo or apartment easily!</p>
      <p>這是你的物業管理網站！</p>
      <p>Contact us at {process.env.MANAGER_EMAIL}</p>
      <img src="/condo.jpg" alt="Condo" width="300" />
      <br />
      <a href="/rules.pdf" target="_blank">Download Rules</a>
    </div>
  );
}
