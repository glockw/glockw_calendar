import { screen } from "@testing-library/react";
import {render} from "@testing-library/react";
import DateComponent from "./components/DateComponent";

describe("DateComponent", () => {
  describe(" reminder", () => {
    it("should  create a reminder", async () => {
   
      const date = {
        id:'28-2',
        date: new Date().toDateString(),
        reminders:[]
      };
      const {container, getByText, getByTestId}  = render(<DateComponent date={date}/>);

      ///it should load the container
      //fire event click on time row
      /// wait for modal to launch
      /// fill the modal inputs
      /// fire  save event
      /// expect to container contain a div with the reminder
    });
  });
});
