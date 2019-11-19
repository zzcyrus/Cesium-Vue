<template>
  <styled-title>123</styled-title>
</template>

<script>
import styled from 'vue-styled-components'

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export default {
  name: 'home',
  components: {
    'styled-title': StyledTitle
  }
}
</script>
