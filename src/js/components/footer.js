function footer() {
  const footer = document.querySelector(".footer");

  footer.innerHTML = `
 <div class="footer">
 created by <span>Robert Żuk</span> 
 <a
    href="https://devchallenges.io"
   target="_blank"
   rel="noreferrer"
 >
   devChallenges.io
 </a>
</div>
 `;
}

export { footer };
