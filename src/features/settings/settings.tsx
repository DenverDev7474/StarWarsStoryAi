import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Setting, fetchSettings } from './settingsSlice';
import { useAppDispatch, RootState  } from '../../store';


function Settings() {
  const dispatch = useAppDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Star Wars Settings</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gravity</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>terrain</th>
            <th></th>
          </tr>
        </thead>
        {settings.loading ? (
           <div>Loading...</div>
          ) : (
            settings.data.map((setting: Setting) => (
              <tbody>
              <tr key={setting.name}>
                <td>{setting.name}</td>
                <td>{setting.gravity}</td>
                <td>{setting.population}</td>
                <td>{setting.rotation_period}</td>
                <td>{setting.surface_water}</td>
                <td>{setting.terrain}</td>
                <td><button>Add to Story</button></td>
              </tr> 
              </tbody>
            ))
          )}
      </table>
    </div>  
  );
};

export default Settings;
