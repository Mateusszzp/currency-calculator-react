import Label from "./Label";
import "./index.css"

function App() {
  return (
    <main>
    <form class="js-form  form">
      <fieldset class="form__fieldset">
        <legend class="form__legend">
          Kalkulator walut
        </legend>
        <label>
          <p>
            <span class="label"> Wpisz zł* </span>
            <input required class="js-userValue label__input" type="number" name="zl" min="1" step="any"/>
          </p>


          <p>
            <span class="label"> Wybierz walute</span>
            <select class="js-currency label__input--setCurrency" name=" currency" list="currency">
              <dataList id="currency">
                <option value="EUR">Euro</option>
                <option value="USD">Dolar</option>
                <option value="GBP">Funt</option>
              </dataList></select>
          </p>
        </label>

        <p><span calss="form__exchangeRate">Aktualne kursy walut:</span></p>
        <p>Euro 4.6940</p>
        <p>Dolar 4.2375</p>
        <p>Funt 5.5831</p>


        <p><strong class="js-result formResult">N/a</strong></p>
      </fieldset>
      <p>
        <button class="form__button">Przelicz</button>
      </p>
    </form>
  <footer class="footer">Wykonano w ramach zadania YouCode@ Mateusz Paśko</footer>
</main>
  );
}

export default App;
