constructor(props){
    super(props)
    this.state = {
        inputVal: props.inputValue
    }
    // preserve the initial state in a new object
    this.baseState = this.state
}