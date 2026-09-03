# http module

HTTP->Hyper Text Transfer Protocol
HTML->Hyper Text Markup Language
CSS->Cascading Style Sheet

our server to run our code is LocalHost it's ip address is 127.0.0.1

to check on server write localhost:(port name eg.5000) .remember while checking program should be in running state.

to terminate server press ctrl+c,rather than deleting terminal.

NPM->Node Package Manager

# HTTP Status Codes
200->OK
201->Created
202->Accepted
204->No Content
400->Bad Request
401->Unauthorized
403->Forbidden
404->Not Found
500->Internal Server Error
503->Service unavailable

# Content Type

Content-Type in JavaScript is an HTTP header that tells the browser or server what type of data is being sent.

# common Content Types

| Content-Type             | Used for         |
| ------------------------ | ---------------- |
| `text/html`              | HTML pages       |
| `text/plain`             | Plain text       |
| `application/json`       | JSON data        |
| `text/css`               | CSS files        |
| `application/javascript` | JavaScript files |
| `image/jpeg`             | JPG images       |
| `image/png`              | PNG images       |
| `image/webp`             | WebP images      |
| `application/pdf`        | PDF files        |


## server can send data
1->html content
2->html files
3->json data
4->plain text
5->css
6->jss
7->file

## server can set header to send data

1->res.writeHeader()
2->res.setHeader()

## server can set status code

1->res.statusCode()
2->res.writeHeader()

## request methods

1->get
2->post
3->put/patch
4->delete

# ROUTES
/->home/index/local host
/users->open users page
/products/2369->give 2369 product
/products->give all products
/products?/s=tv->give all tv details(in command s means search)