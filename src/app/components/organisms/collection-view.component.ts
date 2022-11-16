import { Component, Input } from '@angular/core';

@Component({
  selector: 'digimon-collection-view',
  template: `
    <div
      class="surface-card ml-2 flex h-full max-h-full flex-row overflow-x-hidden overflow-y-scroll border border-slate-300"
    >
      <div class="2xl:w-8/10 hidden w-full md:block">
        <digimon-pagination-card-list
          [collectionOnly]="collectionOnly"
          [deckView]="deckView"
        ></digimon-pagination-card-list>
      </div>
      <div class="2xl:w-2/10 hidden 2xl:flex">
        <digimon-filter-side-box></digimon-filter-side-box>
      </div>
    </div>
  `,
  styles: [
    `
      .toolbar {
        p {
          text-align: center;
          line-height: 42px;
          height: 42px;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 42px;
        }

        button {
          height: 100%;
        }

        .bottom-font {
          line-height: 60px;
        }
      }

      .card-list {
        min-height: 20px;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
      }

      .card-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 14px;
      }

      .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 200px 0 0 200px;
        border-color: transparent transparent transparent var(--surface-card);
        .inner-triangle {
          .inner-triangle {
            position: relative;
            top: -20px;
            left: 2px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 200px 0 0 200px;
            border-color: transparent transparent transparent red;
          }
        }
      }

      .Colors::ng-deep {
        .p-selectbutton {
          .p-element:nth-child(1) {
            border-color: white !important;
            color: black !important;
            background: #ef1919 !important;
          }
          .p-element:nth-child(2) {
            border-color: white !important;
            color: black !important;
            background: #19a0e3 !important;
          }
          .p-element:nth-child(3) {
            border-color: white !important;
            color: black !important;
            background: #ffd619 !important;
          }
          .p-element:nth-child(4) {
            border-color: white !important;
            color: black !important;
            background: #19b383 !important;
          }
          .p-element:nth-child(5) {
            border-color: white !important;
            color: white !important;
            background: #191919 !important;
          }
          .p-element:nth-child(6) {
            border-color: white !important;
            color: black !important;
            background: #8d6fdb !important;
          }
          .p-element:nth-child(7) {
            border-color: white !important;
            color: black !important;
            background: #ffffff !important;
          }
          .p-element:nth-child(8) {
            border-color: white !important;
            color: black !important;
            background: linear-gradient(
              90deg,
              #ef1919 14%,
              #19a0e3 28%,
              #ffd619 42%,
              #19b383 56%,
              #191919 70%,
              #8d6fdb 84%,
              #ffffff 100%
            ) !important;
          }
        }
      }

      .cards-in-a-row-5 {
        flex: 1 1 20%;
        max-width: 20%;
      }
    `,
  ],
})
export class CollectionViewComponent {
  @Input() deckView: boolean;
  @Input() collectionOnly: boolean = false;
}
