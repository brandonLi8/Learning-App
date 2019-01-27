/**
 * Learning App
 * PlannerView.js
 *
 * @author Brandon Li <brandon.li820@icloud.com> 
 * Created on 1/25/19
 * Copyright © 2019 Brandon Li. All rights reserved.
 *
 *
 * ## Functionality:
 *  - display the view for the planner
 */
'use strict';
// import modules
import ScreenView from "./../../ScreenView/ScreenView.js";
// modules
var screen = new ScreenView();


export default class PlannerView{
  /**
   * Display the basics of the view
   * @constructor
   * @public
   * @return {none}
   * create a basic planner wrapper and put the header inside of it
   */
  constructor(){
    // add the planner wrapper
    screen.addChildToParentType( "div", "planner_wrapper", null, "", "body" );
    /**
     * add the header and all of its children
     */
    addHeader(); 
    // this.addCard( "ur mom", 6, "is bad", ["g", "2"])
  }
  /**
   * add a card to the view
   * @public
   * @param {String} title - the title of the card in the heading
   * @param {number} importance - the value of if 0-10;
   * @param {String} description - the description of the plan
   * @param {Array[ string ]} tags - all the tags associated
   */
  addCard( title, importance, description, tags ){
    let type;
    if ( importance > 8 ) type = "highlighted";
    // highlight important ones
    let card = screen.addChildToParentId( 
                  "div", type, "card", 
                  "", "planner_wrapper" );
    let heading = screen.addChildToParentNode( 
                    "div", "heading", null, 
                    "", card );
    screen.addChildToParentNode( "div", "text", null, title, heading);
    screen.addChildToParentNode( "div", "value", null, importance, heading);
    screen.addChildToParentNode( "div", "description", null, description, card);
    let tagWrapper = screen.addChildToParentNode( "div", "tags", null, "", card)
    for ( var i = 0 ; i < tags.length; i++ ){
      screen.addChildToParentNode( "div", null, null, tags[ i ], tagWrapper);
    }
  }
}

function addHeader(){
  screen.addChildToParentId( "div", "header", null, "", "planner_wrapper" );
  screen.addChildToParentId( "div", "left", null, "", "header" );
  addPlannerIcon();
  function addPlannerIcon() {
    // add the div to the wrapper
    let conatiner = screen.addChildToParentId( 
                      "div", "header_content", 
                      null, "", "left" 
                    )
    // add the image to the container
    let image = screen.addChildToParentNode( 
                  "img", "backToDashboard", 
                  null, "", conatiner
                );
    image.setAttribute( "src", "./assets/plannerTBackground.png" );
    // handle user input
    image.onmouseover = function() { 
      image.setAttribute( "src", "./assets/plannerTBackgroundHover.png" );
    };
    image.onmouseout = function() { 
      image.setAttribute( "src", "./assets/plannerTBackground.png" );
    };
  }
  let backToDashboard = screen.addChildToParentId( 
                          "div", "header_content", 
                          null, "Back To Dashboard", "left" 
  );
  backToDashboard.onclick = function(){
    window.open( "../dashboard.html", "_self" ) 
  }
  backToDashboard.style.border = "none";

  let help = screen.addChildToParentId( 
              "div", "header_content", 
              null, "Help", "left"
  );
  help.onclick = function(){
    window.open( "./help.html", "_self" ) 
  }
  help.style.border = "none";
  let New = screen.addChildToParentId( 
                          "div", "header_content", 
                          null, "New", "left" 
  );
  New.onclick = function(){
    window.open( "../new.html", "_self" ) 
  }
  New.style.border = "none";
  screen.addChildToParentId( 
          "div", "header_content_right", 
          null, "Planner", "left"
  );
}


