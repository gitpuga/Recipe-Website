import { React } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <Link className="a" to="/"><h1 className='header-text'>🍽️ cook book</h1></Link>
      </nav>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="поиск"
          inputProps={{ 'aria-label': 'поиск' }}
        />
      </Paper>
      <nav className='header-nav'>
        <div className='nav-div'>
          <Link className="a" to="/add-recipe">
            <h1 className='header-text'>добавить рецепт</h1>
          </Link>
        </div>
        <div className='nav-div'>
          <Link className="a" to="/contact">
            <h1 className='header-text'>контакты</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
