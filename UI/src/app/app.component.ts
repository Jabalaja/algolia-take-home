import { Component, AfterViewInit } from "@angular/core";
import algoliasearch from "algoliasearch/lite";
import aa from "search-insights";

const algoliaConfig = {
  index: "dev_index_takehome",
  app: "37FFNFA337",
  apiKey: "71143059ebab560f30ff76ec9dd08fb3",
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit {
  config = {
    searchClient: algoliasearch(algoliaConfig.app, algoliaConfig.apiKey),
    indexName: algoliaConfig.index,
    routing: true,
  };
  resultsContainer = undefined;
  header = undefined;
  userToken = undefined;

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
    aa("init", {
      appId: "37FFNFA337",
      apiKey: "71143059ebab560f30ff76ec9dd08fb3",
      useCookie: true,
    });
    aa("getUserToken", {}, (err, userToken) => {
      if (err) {
        console.error(err);
        return;
      }
      this.userToken = userToken;
    });
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

  public sendClickEvent(item) {
    console.log(item.objectID);
    aa("clickedObjectIDs", {
      userToken: this.userToken,
      index: algoliaConfig.index,
      eventName: "Product Clicked",
      objectIDs: [item.objectID],
    });
  }

  public sendConversionEvent(item) {
    console.log(item.objectID);
    aa("convertedObjectIDs", {
      userToken: this.userToken,
      index: algoliaConfig.index,
      eventName: "Product Bought",
      objectIDs: [item.objectID],
    });
  }
}
