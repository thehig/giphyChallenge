import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

// axios.defaults.baseURL = 'http://localhost';
axios.defaults.adapter = httpAdapter;