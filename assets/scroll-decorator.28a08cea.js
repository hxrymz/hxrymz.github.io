import{r as n,j as s,F as i}from"./index.2dd67c8e.js";class r extends n.exports.Component{constructor(){super(),this.state={scrollPosition:null},this.handleInterval=this.handleInterval.bind(this),this.handleRequestAnimationFrame=this.handleRequestAnimationFrame.bind(this)}componentWillMount(){this.intervalID=setInterval(this.handleInterval,50)}componentWillUnmount(){clearInterval(this.intervalID),cancelAnimationFrame(this.requestID),this.requestID=null,this.intervalID=null}getWindowScrollTop(){return window.pageYOffset||document.documentElement.scrollTop}handleInterval(){cancelAnimationFrame(this.requestID),this.requestID=requestAnimationFrame(this.handleRequestAnimationFrame)}handleRequestAnimationFrame(){const{scrollPosition:e}=this.state,t=this.getWindowScrollTop();t!==e&&(typeof this.props.scrollhandler=="function"&&this.props.scrollhandler(t),this.setState({scrollPosition:t}))}render(){return s(i,{})}}export{r as default};
