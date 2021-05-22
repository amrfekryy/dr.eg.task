import { BackToHome } from "../App";
// import { MoonOutline, Moon } from "heroicons-react";
import "./styles/_four.scss";

/* 
  Think: How we would use this Dark/Light mode switcher on other potential routes/components in a bigger application.
  Would your solution work for this?
*/

const ChallengeFour = () => {

  return (
    <div className="ch4">
      <BackToHome />
      <div>
        <h1 className="title is-1 has-text-grey-lighter theme-override">Challenge 4</h1>
      </div>
      <h2 className="subtitle has-text-grey-lighter theme-override">
        This page is looking a little dark. Mind turning on the lights in here?
        It seems like the toggle button doesn't work...
        <span role="img" aria-label="ponder">
          🤔
        </span>
      </h2>
      <div className="columns has-text-grey-lighter theme-override">
        <div className="column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel dolor massa. Quisque euismod ante nec quam tristique
            sollicitudin. Morbi dolor nisi, vehicula sit amet mi vitae,
            scelerisque vehicula risus. Mauris mauris augue, fermentum id ex
            quis, tempor convallis nulla. Etiam auctor tellus blandit purus
            tristique lacinia. Mauris turpis lorem, ultricies sit amet orci
            hendrerit, sodales sodales tellus. Suspendisse fermentum, tortor
            eget pellentesque lacinia, velit augue consequat odio, ut fermentum
            quam diam id odio. Suspendisse pulvinar quam magna, eget tempor
            neque ullamcorper in.
          </p>
        </div>
        <div className="column">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel dolor massa. Quisque euismod ante nec quam tristique
            sollicitudin. Morbi dolor nisi, vehicula sit amet mi vitae,
            scelerisque vehicula risus. Mauris mauris augue, fermentum id ex
            quis, tempor convallis nulla. Etiam auctor tellus blandit purus
            tristique lacinia. Mauris turpis lorem, ultricies sit amet orci
            hendrerit, sodales sodales tellus. Suspendisse fermentum, tortor
            eget pellentesque lacinia, velit augue consequat odio, ut fermentum
            quam diam id odio. Suspendisse pulvinar quam magna, eget tempor
            neque ullamcorper in.
          </p>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
        <div className="buttons level-right mt-4">
          <button className="button is-primary">Save</button>
          <button className="button is-link">Submit</button>
        </div>
      </div>
    
    
      <br /><h1 className="title is-3 has-text-grey-lighter theme-override">Solution:</h1>
      <h2 className="subtitle has-text-grey-lighter theme-override">
        Mode toggle button is now functional and displayed on all app routes. It also remembers your last mode choice. 
      </h2>

    </div>
  );
};

export default ChallengeFour;
