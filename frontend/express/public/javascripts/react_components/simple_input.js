var InputBlock = React.createClass({

    getInitialState : function() {

        if (this.props.value)
        {
            var value = this.props.value;
        }
        else
        {
            var value = "";
        }

        return({
            "value" : value
        });

    },
    
    componentDidMount : function(){
        
        if (this.state.value){
            this.props.onChange(this.props.setting, this.state.value);
        } 
          
    },

    change_input : function(event)
    {

        var value = event.target.value;

        if (this.props.type && this.props.type == "int")
        {
            if (!this.isInt(value) && value)
            {
                return false;
            }
        }

        if (event.target.value.toString().length > 0){
            this.props.onChange(this.props.setting, event.target.value);
        } 

        this.setState({ value: event.target.value });
    },

    render : function(){

        if (this.props.label)
        {
            var label = <div className="setting_label">{this.props.label}</div>;
        }
        else
        {
            var label = false;
        }

        var style = {};

        if (this.props.width)
        {
            style.width = this.props.width;
        }

        return(
            <div className="setting_block">
                {label}
                <input type="text" value={this.state.value} onChange={this.change_input} style={style}/>
            </div>
        )
    },

    isInt : function(value) {
        return !isNaN(value) &&
               parseInt(Number(value)) == value &&
               !isNaN(parseInt(value, 10));
    }

});
