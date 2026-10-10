function App() {
  return (
    <main className="container">
      <section className="sidebar">
        <div className="step active">
          <span>1</span>

          <div>
            <small>STEP 1</small>
            <strong>YOUR INFO</strong>
          </div>
        </div>

        <div className="step">
          <span>2</span>

          <div>
            <small>STEP 2</small>
            <strong>SELECT PLAN</strong>
          </div>
        </div>

        <div className="step">
          <span>3</span>

          <div>
            <small>STEP 3</small>
            <strong>ADD-ONS</strong>
          </div>
        </div>

        <div className="step">
          <span>4</span>

          <div>
            <small>STEP 4</small>
            <strong>SUMMARY</strong>
          </div>
        </div>




      </section>

   
      <section className="content">
        <h1>Personal info</h1>

        <p className="description">
          Please provide your name, email address, and phone number.
        </p>

        <form>
          <label>Name</label>

          <input type="text" placeholder="e.g. Stephen King" />

          <label>Email Address</label>

          <input type="email" placeholder="e.g. stephenking@lorem.com" />

          <label>Phone Number</label>

          <input type="tel" placeholder="e.g. +1 234 567 890" />

          <button type="button">Next Step</button>
        </form>
      </section>
    </main>
  );
}
export default App;
