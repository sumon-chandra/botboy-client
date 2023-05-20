import useTitle from "../hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");
  return (
    <>
      <header className="bg-mainColor py-6 text-center">
        <h4 className="lg:text-5xl text-2xl font-bold text-white">
          Boyboy Blogs
        </h4>
      </header>
      <main className="lg:w-1/2 mx-auto py-8 p-4 space-y-6">
        <article>
          <h4 className="text-xl font-bold">
            01. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h4>
          <div className="ms-3 pt-4">
            <p>
              An access token is a short-lived, limited-permission credential
              that is used to access protected resources. A refresh token is a
              long-lived, high-permission credential that can be used to obtain
              new access tokens.
            </p>
            <p>
              Access tokens are typically used to access resources that are not
              sensitive, such as public data or user-generated content. Refresh
              tokens are typically used to access resources that are sensitive,
              such as user data or financial information.
            </p>
            <p>
              Access tokens are typically stored in the browser's local storage
              or cookies. Refresh tokens are typically stored in the browser's
              local storage or a secure key-value store.
            </p>
            <p>
              When the access token expires, the application can use the refresh
              token to request a new access token. The authorization server will
              validate the refresh token and issue a new access token.
            </p>
          </div>
        </article>
        <article>
          <h4 className="text-xl font-bold">
            02. Compare SQL and NoSQL databases?
          </h4>
          <div className="mt-6 lg:grid grid-cols-2 gap-x-4">
            <div className="lg:mb-0 mb-4">
              <p className="text-xl font-bold border-b-2 text-center">SQL</p>
              <ul className="mt-4 space-y-3 font-semibold list-inside list-decimal">
                <li>
                  SQL database are primarily called RDB or realtime database.
                </li>
                <li>Structured query language (SQL)</li>
                <li>SQL database are table based databases.</li>
                <li>SQL databases have a predefined schema.</li>
                <li>Example: Oracle, Postgres, MySQL and Ms-SQL</li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-bold border-b-2 text-center">NoSQL</p>
              <ul className="mt-4 space-y-3 font-semibold list-inside list-decimal">
                <li>
                  NoSQL databases are primarily called as not-relational
                  distributed database.
                </li>
                <li>No declarative query language.</li>
                <li>
                  NoSQL can be document based, key-value pairs, Graph database.
                </li>
                <li>
                  NoSQL databases use dynamic schema for unstructured data.
                </li>
                <li>Example: MongoDB, Redis, Neo4J, Cassandra, Hbase.</li>
              </ul>
            </div>
          </div>
        </article>
        <article>
          <h4 className="text-xl font-bold">
            03. What is Express js and What is Nest js?
          </h4>
          <div className="ms-3 pt-4">
            <p>
              Express.js is a minimal and flexible Node.js web application
              framework that provides a robust set of features for web and
              mobile applications. Express provides a thin layer of fundamental
              web application features, without obscuring Node.js features that
              you know and love.
            </p>
            <p>
              Express is a popular choice for building web applications because
              it is easy to use, efficient, and scalable. Express is also
              well-documented and has a large community of developers who can
              help you with any problems you encounter.
            </p>
            <p>
              NestJS is a progressive Node.js framework that helps you build
              scalable, maintainable, and efficient server-side applications. It
              is built on top of Express and provides a number of features that
              make it easy to build robust and well-organized applications.
            </p>
            <p>
              NestJS is a great choice for building scalable, maintainable, and
              efficient server-side applications. It is easy to learn and use,
              and it provides a number of features that make it a powerful tool
              for building web applications.
            </p>
          </div>
        </article>
        <article>
          <h4 className="text-xl font-bold">
            04. What is MongoDB aggregate and how does it work?
          </h4>
          <div className="ms-3 pt-4">
            <p>
              MongoDB aggregate is a feature that allows you to perform complex
              operations on your data. It is similar to SQL's GROUP BY
              statement, but it is more powerful and flexible. MongoDB aggregate
              works by using a pipeline of stages. Each stage performs an
              operation on the data, and the output of one stage is passed to
              the next stage. The final stage in the pipeline is the output of
              the aggregation.
            </p>
            <p>
              There are many different stages that you can use in a MongoDB
              aggregate pipeline. Some of the most common stages include:{" "}
              <i className="font-bold">
                $match, $group, $project, $sort, $limit
              </i>
            </p>
          </div>
        </article>
      </main>
    </>
  );
};

export default Blog;
