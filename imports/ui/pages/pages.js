import './dashboard.html';
import './home.html';
import './login.html';
import './page-not-found.html';
import './register.html';
import './search.html';
import './reverseauction.html';
import './productDetail.html';
import './cart.html';
import './orderTracking.html';
import './catalogue.html';
import './addProduct.html';

import './home.css';
import './login.css';
import './dashboard.css';
import './register.css';
import './search.css';
import './reverseauction.css';
import './cart.css';
import './orderTracking.css';
import './catalogue.css';
import './addProduct.css';

Template.search.events({
  'click #viewDetail': function(e) {
    e.preventDefault();

    Modal.show('productDetail');
  }
});

Template.search.events({
  'click #head-cart-button': function(e) {
    e.preventDefault();

    Modal.show('cart');
  }
});

Template.catalogue.events({
  'click #viewDetail': function(e) {
    e.preventDefault();

    Modal.show('addProduct');
  }
});
