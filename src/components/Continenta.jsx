

export const Continenta = (el) => {
    function toggleDropdown() {
        var dropdown = document.querySelector(".dropdown-content");
        dropdown.classList.toggle("show");
    }
    
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
  return (
    <div className="dropdown">
        <button onClick={()=>toggleDropdown()} className="dropbtn">Filtrar por region</button>
        <div className="dropdown-content">
            <button onClick={()=>el.fu('Africa')}>Africa</button>
            <button onClick={()=>el.fu('North America')}>Norte America</button>
            <button onClick={()=>el.fu('South America')}>Sud America</button>
            <button onClick={()=>el.fu('Asia')}>Asia</button>
            <button onClick={()=>el.fu('Europe')}>Europa</button>
            <button onClick={()=>el.fu('Oceania')}>Oceania</button>
        </div>
    </div>
  )
}
