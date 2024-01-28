import useData from "../hooks/useData";
import Classes from "../style/Home.module.css";

function Home() {
  const { loading, error, data } = useData("user");

  return (
    <>
      <section>
        <div className="container">
          <div className={Classes.main_section_area}>
            <div className={Classes.title}>
              <h1>This is your Data Table.</h1>
            </div>
            {loading && !error && <div>Loading...</div>}
            {!loading && error && <div>error</div>}
            {!loading && !error && (
              <div className={Classes.table_area}>
                <table>
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {data.length > 0 ? (
                    data.map((col) => {
                      return (
                        <tbody key={Math.random()}>
                          <tr>
                            <td>{col.first_name}</td>
                            <td>{col.last_name}</td>
                            <td>{col.email_addr}</td>
                            <td>{col.password}</td>
                            <td>
                              <button>Edit</button>
                              <button>Delete</button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })
                  ) : (
                    <tbody>
                      <tr>
                        <td>No Data Available.</td>
                        <td>No Data Available.</td>
                        <td>No Data Available.</td>
                        <td>No Data Available.</td>
                        <td>No Data Available.</td>
                      </tr>
                    </tbody>
                  )}
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
