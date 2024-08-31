//Authen
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

//Employee
export const FETCH_EMPLOYEES_REQUEST = 'FETCH_EMPLOYEES_REQUEST';
export const FETCH_EMPLOYEES_SUCCESS = 'FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_FAILURE = 'FETCH_EMPLOYEES_FAILURE';
export const EDIT_EMPLOYEE_SUCCESS = "EDIT_EMPLOYEE_SUCCESS";
export const EDIT_EMPLOYEE_FAILURE  = "EDIT_EMPLOYEE_FAILURE";
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS';
export const ADD_EMPLOYEE_FAILURE = 'ADD_EMPLOYEE_FAILURE';
export const UPDATE_EMPLOYEE_STATUS_SUCCESS = "UPDATE_EMPLOYEE_STATUS_SUCCESS" 
export const UPDATE_EMPLOYEE_STATUS_FAILURE = "UPDATE_EMPLOYEE_STATUS_FAILURE"
export const FETCH_EMPLOYEES_COUNT_SUCCESS = "FETCH_EMPLOYEES_COUNT_SUCCESS";
export const FETCH_EMPLOYEES_COUNT_FAILURE = "FETCH_EMPLOYEES_COUNT_FAILURE";


export const CHECK_EMAIL_EXISTS_REQUEST = 'CHECK_EMAIL_EXISTS_REQUEST';
export const CHECK_EMAIL_EXISTS_SUCCESS = 'CHECK_EMAIL_EXISTS_SUCCESS';
export const CHECK_EMAIL_EXISTS_FAILURE = 'CHECK_EMAIL_EXISTS_FAILURE';


//Invoice
export const FETCH_INVOICES_REQUEST = 'FETCH_INVOICES_REQUEST';
export const FETCH_INVOICES_SUCCESS = 'FETCH_INVOICES_SUCCESS';
export const FETCH_INVOICES_FAILURE = 'FETCH_INVOICES_FAILURE';
export const EDIT_INVOICES_SUCCESS = "EDIT_INVOICES_SUCCESS"
export const EDIT_INVOICES_FAILURE = "EDIT_INVOICES_FAILURE"
export const ADD_INVOICES_SUCCESS = "EDIT_INVOICES_SUCCESS"
export const ADD_INVOICES_FAILURE = "EDIT_INVOICES_FAILURE"
export const FETCH_INVOICES_COUNT_SUCCESS = "FETCH_INVOICES_COUNT_SUCCESS"
export const FETCH_INVOICES_COUNT_FAILURE = "FETCH_INVOICES_COUNT_FAILURE"

//Movie
export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST"
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS"
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE"
export const EDIT_MOVIES_SUCCESS  = "EDIT_MOVIES_SUCCESS";
export const EDIT_MOVIES_FAILURE  = "EDIT_MOVIES_FAILURE";
export const ADD_MOVIES_SUCCESS  = "ADD_MOVIES_SUCCESS";
export const ADD_MOVIES_FAILURE  = "ADD_MOVIES_FAILURE";
export const HIDDEN_MOVIE_SUCCESS = "HIDDEN_MOVIE_SUCCESS"
export const HIDDEN_MOVIE_FAILURE = "HIDDEN_MOVIE_FAILURE"
export const FETCH_MOVIES_COUNT_SUCCESS = "FETCH_MOVIES_COUNT_SUCCESS"
export const FETCH_MOVIES_COUNT_FAILURE = "FETCH_MOVIES_COUNT_FAILURE"

//Room
export const FETCH_ROOMS_REQUEST = "FETCH_ROOMS_REQUEST"
export const FETCH_ROOMS_SUCCESS = "FETCH_ROOMS_SUCCESS"
export const FETCH_ROOMS_FAILURE = "FETCH_ROOMS_FAILURE"
export const EDIT_ROOMS_SUCCESS = "EDIT_ROOMS_SUCCESS"
export const EDIT_ROOMS_FAILURE = "EDIT_ROOMS_FAILURE"
export const ADD_ROOMS_SUCCESS = "ADD_ROOMS_SUCCESS"
export const ADD_ROOMS_FAILURE = "ADD_ROOMS_FAILURE"

//Seat
export const FETCH_SEATS_REQUEST = "FETCH_SEATS_REQUEST"
export const FETCH_SEATS_SUCCESS = "FETCH_SEATS_SUCCESS"
export const FETCH_SEATS_FAILURE = "FETCH_SEATS_FAILURE"
export const ADD_SEATS_SUCCESS = "ADD_SEATS_SUCCESS"
export const ADD_SEATS_FAILURE = "ADD_SEATS_FAILURE"

export const EDIT_SEATS_SUCCESS = "EDIT_SEATS_SUCCESS"
export const EDIT_SEATS_FAILURE = "EDIT_SEATS_FAILURE"

//Theater
export const FETCH_THEATERS_REQUEST = "FETCH_THEATERS_REQUEST"
export const FETCH_THEATERS_SUCCESS = "FETCH_THEATERS_SUCCESS"
export const FETCH_THEATERS_FAILURE = "FETCH_THEATERS_FAILURE"
export const EDIT_THEATERS_SUCCESS  = "EDIT_THEATERS_SUCCESS";
export const EDIT_THEATERS_FAILURE  = "EDIT_THEATERS_FAILURE";
export const ADD_THEATERS_SUCCESS  = "ADD_THEATERS_SUCCESS";
export const ADD_THEATERS_FAILURE  = "ADD_THEATERS_FAILURE";
export const HIDDEN_THEATERS_SUCCESS = "HIDDEN_THEATERS_SUCCESS"
export const HIDDEN_THEATERS_FAILURE = "HIDDEN_THEATERS_FAILURE"
export const FETCH_THEATERS_COUNT_SUCCESS = "FETCH_THEATERS_COUNT_SUCCESS"
export const FETCH_THEATERS_COUNT_FAILURE = "FETCH_THEATERS_COUNT_FAILURE"

//Schedule
export const FETCH_SCHEDULES_REQUEST = 'FETCH_SCHEDULES_REQUEST';
export const FETCH_SCHEDULES_SUCCESS = 'FETCH_SCHEDULES_SUCCESS';
export const FETCH_SCHEDULES_FAILURE = 'FETCH_SCHEDULES_FAILURE';
export const FETCH_SCHEDULES_BY_MOVIEID_REQUEST = 'FETCH_SCHEDULES_BY_MOVIEID_REQUEST';
export const FETCH_SCHEDULES_BY_MOVIEID_SUCCESS = 'FETCH_SCHEDULES_BY_MOVIEID_SUCCESS';
export const FETCH_SCHEDULES_BY_MOVIEID_FAILURE = 'FETCH_SCHEDULES_BY_MOVIEID_FAILURE';

// New Action Types for fetching seats by schedule
export const FETCH_SEATS_BY_SCHEDULE_REQUEST = 'FETCH_SEATS_BY_SCHEDULE_REQUEST';
export const FETCH_SEATS_BY_SCHEDULE_SUCCESS = 'FETCH_SEATS_BY_SCHEDULE_SUCCESS';
export const FETCH_SEATS_BY_SCHEDULE_FAILURE = 'FETCH_SEATS_BY_SCHEDULE_FAILURE';

export const CLEAR_SCHEDULES = 'CLEAR_SCHEDULES';

//Actor
// Actor Action Types
export const FETCH_ACTORS_REQUEST = "FETCH_ACTORS_REQUEST";
export const FETCH_ACTORS_SUCCESS = "FETCH_ACTORS_SUCCESS";
export const FETCH_ACTORS_FAILURE = "FETCH_ACTORS_FAILURE";
export const EDIT_ACTORS_SUCCESS = "EDIT_ACTORS_SUCCESS";
export const EDIT_ACTORS_FAILURE = "EDIT_ACTORS_FAILURE";
export const ADD_ACTORS_SUCCESS = "ADD_ACTORS_SUCCESS";
export const ADD_ACTORS_FAILURE = "ADD_ACTORS_FAILURE";
export const HIDDEN_ACTORS_SUCCESS = "HIDDEN_ACTORS_SUCCESS";
export const HIDDEN_ACTORS_FAILURE = "HIDDEN_ACTORS_FAILURE";
export const FETCH_ACTORS_COUNT_SUCCESS = "FETCH_ACTORS_COUNT_SUCCESS";
export const FETCH_ACTORS_COUNT_FAILURE = "FETCH_ACTORS_COUNT_FAILURE";

//Producer
export const FETCH_PRODUCERS_REQUEST = "FETCH_PRODUCERS_REQUEST"
export const FETCH_PRODUCERS_SUCCESS = "FETCH_PRODUCERS_SUCCESS"
export const FETCH_PRODUCERS_FAILURE = "FETCH_PRODUCERS_FAILURE"
export const EDIT_PRODUCERS_SUCCESS = "EDIT_PRODUCERS_SUCCESS"
export const EDIT_PRODUCERS_FAILURE = "EDIT_PRODUCERS_FAILURE"
export const ADD_PRODUCERS_SUCCESS = "ADD_PRODUCERS_SUCCESS"
export const ADD_PRODUCERS_FAILURE = "ADD_PRODUCERS_FAILURE"
export const HIDDEN_PRODUCERS_SUCCESS = "HIDDEN_PRODUCERS_SUCCESS"
export const HIDDEN_PRODUCERS_FAILURE = "HIDDEN_PRODUCERS_FAILURE"
export const FETCH_PRODUCERS_COUNT_SUCCESS = "FETCH_PRODUCERS_COUNT_SUCCESS"
export const FETCH_PRODUCERS_COUNT_FAILURE = "FETCH_PRODUCERS_COUNT_FAILUREe"

//Food
export const FETCH_FOODS_REQUEST = "FETCH_FOODS_REQUEST";
export const FETCH_FOODS_SUCCESS = "FETCH_FOODS_SUCCESS";
export const FETCH_FOODS_FAILURE = "FETCH_FOODS_FAILURE";
export const EDIT_FOOD_SUCCESS = "EDIT_FOOD_SUCCESS";
export const EDIT_FOOD_FAILURE = "EDIT_FOOD_FAILURE";
export const ADD_FOOD_SUCCESS = "ADD_FOOD_SUCCESS";
export const ADD_FOOD_FAILURE = "ADD_FOOD_FAILURE";
// Thêm các types cho chức năng search
export const SEARCH_FOOD_BY_NAME_REQUEST = "SEARCH_FOOD_BY_NAME_REQUEST"; 
export const SEARCH_FOOD_BY_NAME_SUCCESS = "SEARCH_FOOD_BY_NAME_SUCCESS";
export const SEARCH_FOOD_BY_NAME_FAILURE = "SEARCH_FOOD_BY_NAME_FAILURE";

//Booking
// type.js
export const SELECT_THEATER = 'SELECT_THEATER';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const SELECT_SCHEDULE = 'SELECT_SCHEDULE';
export const SELECT_ROOM = 'SELECT_ROOM';
export const SELECT_SEAT = 'SELECT_SEAT'; // Thêm dòng này
export const DESELECT_SEAT = 'DESELECT_SEAT'; // Thêm dòng này
export const SELECT_CUSTOMER = 'SELECT_CUSTOMER';
export const SELECT_FOOD = 'SELECT_FOOD';
export const CLEAR_BOOKING = 'CLEAR_BOOKING';

