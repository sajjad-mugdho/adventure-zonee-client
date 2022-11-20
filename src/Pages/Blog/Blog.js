import React from 'react';

const Blog = () => {
    return (
        <>
            <div tabIndex={0} className="collapse group my-8 text-left">
                <div className="collapse-title bg-primary text-info-content group-focus:bg-secondary group-focus:text-secondary-content">
                    1. Difference between SQL and NoSQL
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p>SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group my-8 text-left">
                <div className="collapse-title bg-primary text-info-content group-focus:bg-secondary group-focus:text-secondary-content">
                    2. What is JWT, and how does it work?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p>JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token’s issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group my-8 text-left">
                <div className="collapse-title bg-primary text-info-content group-focus:bg-secondary group-focus:text-secondary-content">
                    3. What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p><strong>1. NodeJS : </strong><br />
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p> <br />
                    <p><strong>2. Javascript:</strong> <br />
                        Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group my-8 text-left">
                <div className="collapse-title bg-primary text-info-content group-focus:bg-secondary group-focus:text-secondary-content">
                    4. How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. <br />

                        <br />
                        <p ><strong>How NodeJS handle multiple client requests?</strong>
                        </p> 
                        <br />
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                </div>
            </div>

        </>
    );
};

export default Blog;