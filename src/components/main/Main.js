import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello...!</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">PENDING OPDER</p>
              <span className="font-bold text-title">202</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">PROCESSING ORDER</p>
              <span className="font-bold text-title">99</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-truck fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">READY TO DELIVER</p>
              <span className="font-bold text-title">263</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">DELIVERY ORDERS</p>
              <span className="font-bold text-title">345</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
         

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Todays Delivery</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>98659865</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Arif</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1> Shiyas</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Walk in Customer</h1>
                <p>1881</p>
              </div>
            </div>
          </div>


          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Overvew</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>






        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
