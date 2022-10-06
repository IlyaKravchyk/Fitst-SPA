import { HOME } from '../constants/constants.js'

export const getLocalData = () => JSON.parse(localStorage.getItem('localData'));

export const getSlugNoHash = (hash) => hash ? hash.slice(1) : HOME;

export const getPageData = (slugNoHash) => {
   const localData = getLocalData();
   const data = localData.find(({ slug }) => slugNoHash.includes(slug));
   return data;
}

export const createHashChangeEvent = (actionFunction) => {
   window.addEventListener('hashchange', () => {
      actionFunction(location.hash);
   })
}

export const getHtmlTemplate = (title, content, htmlElement = '') => {
   return `<div class="container">
      <div class="main__wrapper">
         <h1 class="main__title">
            ${title}
         </h1>
         <div class="main__content">
            ${htmlElement}
            ${content}
         </div >
      </div >
   </div >
   `
}
export const createClickEvent = (getArray, actionFunction) => {
   getArray.forEach(btn => {
      btn.addEventListener('click', (event) => {
         actionFunction(event.currentTarget.id)
      })
   })
}