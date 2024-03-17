import { Component, AfterViewInit } from "@angular/core";
import algoliasearch from "algoliasearch/lite";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit {
  config = {
    searchClient: algoliasearch(
      "37FFNFA337",
      "71143059ebab560f30ff76ec9dd08fb3"
    ),
    indexName: "dev_index_takehome",
    routing: true,
  };
  resultsContainer = undefined;
  header = undefined;

  onKeyUp = (event) => {
    if (event.key !== "Escape") {
      return;
    }
    this.closeFilters();
  };

  onClick = (event) => {
    if (event.target !== this.header) {
      return;
    }
    this.closeFilters();
  };

  ngAfterViewInit() {
    this.resultsContainer = document.querySelector(".container-results");
    this.header = document.querySelector("#header");
  }

  public openFilters() {
    document.body.classList.add("filtering");
    window.scrollTo(0, 0);
    window.addEventListener("keyup", this.onKeyUp);
    window.addEventListener("click", this.onClick);
  }

  public closeFilters() {
    document.body.classList.remove("filtering");
    this.resultsContainer.scrollIntoView();
    window.removeEventListener("keyup", this.onKeyUp);
    window.removeEventListener("click", this.onClick);
  }
}
