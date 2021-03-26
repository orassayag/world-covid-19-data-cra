import './SourcesModal.scss';

const SourcesModal = (props) => {
  const { onActionClick } = props;

  return (
    <div className="modal-content sources">
      <div className="content">
        <button onClick={onActionClick} data-action="modal">
          <i className="fas fa-times"></i>
        </button>
        <div className="sources-container">
          <div className="sources-select">
            <div className="title">
              Active Sources
            </div>
            <div className="sources-list">
              <div className="source active">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  GOO
                </div>
              </div>
              <div className="source active">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  WOD
                </div>
              </div>
              <div className="source active">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  CVA
                </div>
              </div>
              <div className="source active">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  COA
                </div>
              </div>
              <div className="source active">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  WIK
                </div>
              </div>
              <div className="source active">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  CAC
                </div>
              </div>
              <div className="source active">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  CVS
                </div>
              </div>
              <div className="source active">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  CLN
                </div>
              </div>
            </div>
          </div>
          <div className="sources-select">
            <div className="title">
              Leading Source
            </div>
            <div className="sources-list">
              <div className="source">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  GOO
                </div>
              </div>
              <div className="source">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  WOD
                </div>
              </div>
              <div className="source">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  CVA
                </div>
              </div>
              <div className="source">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  COA
                </div>
              </div>
              <div className="source">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  WIK
                </div>
              </div>
              <div className="source">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  CAC
                </div>
              </div>
              <div className="source active">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  CVS
                </div>
              </div>
              <div className="source">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  CLN
                </div>
              </div>
            </div>
          </div>
          <div className="sources-select">
            <div className="title">
              Population Sources
            </div>
            <div className="sources-list">
              <div className="source active">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  POP1
                </div>
              </div>
              <div className="source active">
                <div className="image">
                  <i className="fas fa-database"></i>
                </div>
                <div className="name">
                  POP2
                </div>
              </div>
            </div>
          </div>
          <div className="interval-select">
            <div className="title">
              Updates per:
            </div>
            <div className="time-selector">
              <select name="select" value="1" onChange={() => { }}>
                <option value="30">30sec</option>
                <option value="60">1min</option>
                <option value="120">2min</option>
                <option value="300">5min</option>
                <option value="600">10min</option>
              </select>
            </div>
          </div>
          <div className="confirm-container">
            <button onClick={onActionClick} data-action="modal">OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourcesModal;