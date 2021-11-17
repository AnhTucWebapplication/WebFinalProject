const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const checkoutRouter = require('./routes/checkout');
const blogRouter = require('./routes/blog');
const blog_detailRouter = require('./routes/blog-details');
const loginRouter = require('./routes/login');
const shop_detailRouter = require('./routes/shop-details');
const shoping_cartRouter = require('./routes/shoping-cart');
const shop_gridRouter = require('./routes/shop-grid');
const contactRouter = require('./routes/contact');
const registerRouter = require('./routes/register');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/checkout.html', checkoutRouter);
app.use('/blog.html', blogRouter);
app.use('/blog-details.html', blog_detailRouter);
app.use('/contact.html', contactRouter);
app.use('/blog-details.html', blog_detailRouter);
app.use('/login.html', loginRouter);
app.use('/shoping-cart.html', shoping_cartRouter)
app.use('/shop-details.html', shop_detailRouter);
app.use('/shop-grid.html', shop_gridRouter);
app.use('/register.html', registerRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
