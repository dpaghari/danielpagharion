import React from 'react';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { project_title, project_img, project_details, project_tools, project_url } = this.props;
    return (
      <div class="project" style={{"backgroundImage" : `url("${project_img}")`}}>
        <a href={project_url}>
          <h4>{project_title}</h4>
          <p>{project_details}</p>
          <div class="tools-wrapper"><i class="fa fa-wrench fa-lg fa-fw"></i>{this.renderTools(project_tools)}</div>
        </a>
      </div>
    );
  }

  renderTools(tools) {

    if(typeof tools === "string"){
      tools = tools.split(",");
    }
    else
      return null;
    let toolStr = "";
    let tool_img_paths = [];
    let icon_dir = "../../img/icons";
    tools.forEach((el,idx) => {
      switch(el) {
        case "js":
          let jsImg = `${icon_dir}/js.png`;
          tool_img_paths.push(jsImg);
          break;
        case "sass":
          let sassImg = `${icon_dir}/sass.png`;
          tool_img_paths.push(sassImg);
          break;
        case "jquery":
          let jqueryImg = `${icon_dir}/jquery.gif`;
          tool_img_paths.push(jqueryImg);
          break;
        case "webpack":
          let webpackImg = `${icon_dir}/webpack.svg`;
          tool_img_paths.push(webpackImg);
          break;
        case "react":
          let reactImg = `${icon_dir}/react.png`;
          tool_img_paths.push(reactImg);
          break;
        case "wordpress":
          let wordpressImg = `${icon_dir}/wordpress.png`;
          tool_img_paths.push(wordpressImg);
          break;
        case "es6":
          let es6Img = `${icon_dir}/babel.png`;
          tool_img_paths.push(es6Img);
          break;
        case "browserify":
          let browserifyImg = `${icon_dir}/browserify.png`;
          tool_img_paths.push(browserifyImg);
          break;
        case "gulp":
          let gulpImg = `${icon_dir}/gulp.jpeg`;
          tool_img_paths.push(gulpImg);
          break;
        case "c#":
          let csharpImg = `${icon_dir}/csharp.png`;
          tool_img_paths.push(csharpImg);
          break;
        case "unity":
          let unityImg = `${icon_dir}/unity.png`;
          tool_img_paths.push(unityImg);
          break;
        case "canvas":
          let canvasImg = `${icon_dir}/html.png`;
          tool_img_paths.push(canvasImg);
          break;
        case "php":
          let phpImg = `${icon_dir}/php.png`;
          tool_img_paths.push(phpImg);
          break;
      }

    });

    return tool_img_paths.map((el,idx) => <img key={idx} class="tool" src={el}/>);
  }
}
