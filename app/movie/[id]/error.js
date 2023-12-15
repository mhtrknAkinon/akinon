"use client";
import React from "react";
import Link from "next/link";

function Movie404() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Oops, beklenmedik bir hata gerçekleşti!</h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", background: 'transparent', border: 'none', fontSize: 20, marginTop: 8 }}
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}

export default Movie404;
