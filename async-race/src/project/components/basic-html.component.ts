import { basicLayout } from "../description/const";

export class BasicHtml {

  generateHeader() {
    basicLayout.header.innerHTML = `
      <div class="wrapper">
        <div class="header-container">
            <button class="render-page">Garage</button>
            <button class="render-page">Winners</button>
        </div>
      </div>
    `

    basicLayout.body.append(basicLayout.header);
  }

  generateMain() {
    basicLayout.main.innerHTML = `
      <div class="wrapper">
        <section class="garage" id="garage">

            <div class="operate-container">
                <div class="operate-content">
                    <input type="text" id="create-name" class="text">
                    <input type="color" id="create-color" class="color">
                    <button class="carBtn" id="create-car">Create</button>
                </div>
                <div class="operate-content">
                    <input type="text" id="update-name" class="text">
                    <input type="color" id="update-color" class="color">
                    <button class="carBtn" id="update-car">Update</button>
                </div>
                <div class="controlls-btn">
                    <button class="start-btn" id="race">Race</button>
                    <button class="start-btn disabled" id="reset" disabled>Reset</button>
                    <button class="generate-btn" id="generate-cars">Generate cars</button>
                </div>
            </div>

            <div class="garage-cars" id="garage-car">
                <h2 class="title" id="countCarsToGarage">Garage (4)</h2>
                <h3 class="subtitle" id="page">Page #1</h3>
            </div>

            <div class="controll-pages">
                <button class="controll disabled" id="prev-page" disabled>Prev page</button>
                <button class="controll disabled" id="next-page" disabled>Next page</button>
            </div>

            <h4 class="winner" id="winner-car"></h4>

        </section>
      </div>
    `

    basicLayout.body.append(basicLayout.main);
  }
}