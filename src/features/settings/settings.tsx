import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Setting, fetchSettings } from "./settingsSlice";
import { useAppDispatch, RootState } from "../../store";
import { setRemoveSetting , setSetting } from "../generator/generatorSlice";
import { Modal, Button } from "react-bootstrap"

const Settings = () => {
  const dispatch = useAppDispatch();
  const settings = useSelector((state: RootState) => state.settings);
  const [addedSetting, setAddedSetting] = useState<string>("");
  const selectedSettings = useSelector(
    (state: RootState) => state.generator
  );

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  useEffect(() => {
    if (selectedSettings.setting) {
      setAddedSetting(selectedSettings.setting);
    }
  }, [selectedSettings.setting]);

  const addSetting = (name: string) => {
    if (!isAdded(name) && addedSetting !== "") {
      setShowModal(true);
    } else {
      setAddedSetting(name);
      dispatch(setSetting(name));
    }
  };

  const isAdded = (setting: string) => {
    return addedSetting.includes(setting);
  };

  const handleClose = () => setShowModal(false);

  const handleRemoveSetting = (name: string) => {
    dispatch(setRemoveSetting(name));
    setAddedSetting("");
  }

  return (
    <div className="container">
      <h1>Add Star Wars Settings</h1>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Settings already selected!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
                <td>
                  <button
                    onClick={() => addSetting(setting.name)}
                    disabled={isAdded(setting.name)}
                  >
                    Add to Story
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleRemoveSetting(setting.name)}
                    disabled={!isAdded(setting.name)}
                  >
                    Remove from Story
                  </button>
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>
    </div>
  );
};

export default Settings;
