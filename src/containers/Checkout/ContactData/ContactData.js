import React, {Component} from 'react';
import classes from "./ContactData.module.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Jonhnes Lopes Menezes',
        address: {
          street: 'Teststreet 1',
          zipCode: '41351',
          country: 'Germany'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(() => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(() => this.setState({loading: false}));
    console.log(this.props.ingredients);
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type={"text"} name={"name"}
               placeholder={"Your name"}/>
        <input className={classes.Input} type={"text"} name={"email"}
               placeholder={"Your email"}/>
        <input className={classes.Input} type={"text"} name={"street"}
               placeholder={"Street"}/>
        <input className={classes.Input} type={"text"} name={"postal"}
               placeholder={"Postal code"}/>

        <Button btnType={"Success"} clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if(this.state.loading) form = <Spinner/>
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          {form}
        </form>
      </div>
    );
  }
}

export default ContactData;