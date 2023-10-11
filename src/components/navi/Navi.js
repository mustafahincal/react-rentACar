import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { useUserContext } from '../../context/UserContext';
import { removeFromLocalStorage } from '../../services/localStorageService';

function Navi() {
  const { isAdmin, isLogged, setIsLogged, setIsAdmin, isEditor, setIsEditor } =
    useAuthContext();
  const { selectedUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsLogged(false);
    setIsAdmin(false);
    setIsEditor(false);
    removeFromLocalStorage('token');
    removeFromLocalStorage('isAdmin');
    removeFromLocalStorage('isLogged');
    removeFromLocalStorage('userId');
    removeFromLocalStorage('isEditor');
    navigate('/');
  };
  return (
    <div>
      <nav className="flex justify-between items-center py-6 px-14 bg-white text-darkBlue shadow-xl font-bold">
        <Link to="/" className="text-3xl">
          E-Kirala
        </Link>
        <div className="text-xl">
          <Link to="/  ">Anasayfa</Link>
          <Link to="/main" className="ml-10">
            Arabalar
          </Link>
        </div>
        <div className="flex  items-center">
          {(isAdmin || isEditor) && (
            <Link
              className={'btn bg-crimson text-white mr-5'}
              to={'/dashboard/cars'}
            >
              Kontrol Paneli
            </Link>
          )}

          {!isLogged && (
            <>
              <Link className={'btn bg-gray-600 text-white mr-5'} to={'/login'}>
                Giriş Yap
              </Link>
              <Link
                className={
                  'btn bg-white border-2 transition-all duration-200 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white'
                }
                to={'/register'}
              >
                Kayıt Ol
              </Link>
            </>
          )}
          {isLogged && (
            <div className="group relative ">
              <button className="flex items-center bg-gray-600 text-white py-2 ml-5 rounded px-4">
                <span>
                  {selectedUser.firstName + ' ' + selectedUser.lastName}
                </span>
              </button>
              <div className="invisible absolute top-14 right-0 rounded py-3 px-2 min-w-[200px] bg-gray-400 flex flex-col space-y-2 z-10 group-focus-within:visible group-focus-within:mt-2  transition-all dark:bg-prototurk ">
                <Link
                  to="/profile/profileRentals"
                  className={
                    'text-sm inline-flex h-8 items-center px-3 rounded text-black bg-gray-200 hover:bg-gray-500 hover:text-white'
                  }
                >
                  Profile
                </Link>
                <span
                  className="cursor-pointer text-sm inline-flex h-8 items-center px-3 bg-gray-200 text-red-500  rounded hover:bg-red-400 hover:text-white"
                  onClick={() => handleLogOut(false)}
                >
                  Çıkış Yap
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navi;
