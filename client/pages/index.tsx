import axios from 'axios'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Form from '../components/Form'

const Title = styled.h1`
  font-family: 'Fredoka One', sans-serif;
`

export default function Home({categories, subcategories, countries}) {
  const formProps = {
    categories,
    subcategories,
    countries 
  }

  return (
    <>
      <Head>
        <title>Kickstarter prediction</title>
      </Head>
      <div className="w-full mt-10 flex flex-col pb-20">
        <Title className="text-green-500 text-5xl text-center">Kickstarter Predictor</Title>
        <div className="mt-10">
          <Form {...formProps} /> 
        </div>
      </div>
    </> 
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios.get("http://localhost:3000/categorical_keys.json")

  return {
    props: {
      countries: data.country,
      categories: data.category,
      subcategories: data.subcategory,
    }
  }
}
