// // components to be loaded here, not in App.js
// // App.js will only hold a <Layout /> in its return statement...
// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ScrollToTop from "../components/scrollToTop"; //////////////////////

// import { Home  } from "../pages/landingpage";
// import { Demo } from "../pages/demo";
// import { Login } from "../pages/login";
// import { Single } from "../pages/single";
// import injectContext from "../store/appContext"; // means you don't have to keep adding props everywhere

// import { Navbar } from "../components/navbar"; //////////////////////
// import { Footer } from "../components/footer"; //////////////////////
// import Category from "../components/Category"
// import OfferingList from "../components/OfferingList"
// import Register from "../pages/register";

// const Layout = () => {
// 	//the basename is used when your project is published in a subdirectory and not in the root of the domain
// 	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	
// 	// routing through a FE menu, not routing to the BE API
// 	// const basename = process.env.PORT || 3000;
// 	const basename = process.env.BASENAME || "";

// 	return (
// 		<div className="d-flex flex-column h-100">
// 			<BrowserRouter basename={basename}>
// 				<ScrollToTop>
// 					<Navbar />
// 					{/* any components that should render across the board go here, above <Switch /> */}
// 					<Switch>
// 						{/* any components that should render to specific pages should go here w other routes */}
// 						<Route exact path="/signup"> {/* " pba.com/signup " */}
// 							<Register />
// 						</Route>
// 						<Route exact path="/login"> {/* " pba.com/login " */}
// 							<Login />
// 						</Route>
// 						<Route exact path="/"> {/* " pba.com/ " */}
// 							<Home />
// 						</Route>
// 						<Route exact path="/category">
// 							<Category />
// 						</Route>
// 						{/* <Route>
// 							<SHOWCategoryList />
// 						</Route>
// 						<Route>
// 							<EDITCategoryList />
// 						</Route>
// 						<Route>
// 							<SHOWOfferingList />
// 						</Route>
// 						<Route>
// 							<EDITOfferingList />
// 						</Route>
// 						<Route>
// 							<SHOWOrderList />
// 						</Route> */}
						
// 						{/* <Route exact path="/food-categories/:category_id/SHOWofferings"> 
// 							<SHOWOfferingList />
// 						</Route>
// 						<Route exact path="/food-categories/:category_id/EDITofferings">
// 							<EDITOfferingList />
// 						</Route> */}



// 						<Route exact path="/demo"> {/* " pba.com/demo " */}
// 							<Demo />
// 						</Route>
// 						<Route exact path="/single/:theid">
// 							<Single />
// 						</Route>
// 						{/* <Route>
// 							<h1>Not found!</h1>
// 						</Route> */}
// 					</Switch>
// 					<Footer />
// 				</ScrollToTop>
// 			</BrowserRouter>
// 		</div>
// 	);
// };

// export default injectContext(Layout); // equiv is importing injectContext in App.js...
