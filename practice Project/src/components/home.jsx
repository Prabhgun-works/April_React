import { useState , useEffect} from "react";

export default function Home({name}) {
    const [mood , setMood] = useState('');
    useEffect(() => {
        if (mood) console.log("Mood updated:", mood);
      }, [mood]);

return(
    <div>
        <h1>Hello {name}!</h1>
        <label>
            How's your mood today ? 
        <select  onChange={(e)=> setMood(e.target.value) }value={mood}>
            <option value ={"happy"}>😊</option>
            <option value={"Sad"}>😔</option>
            <option value={ "Angery"}>😡</option>
        </select>
        {mood && <p>Your current mood is: <strong>{mood}</strong></p>}
        
         {/* Day 1 :  🏁 Final Verdict: 7.8 / 10 – Solid MVP */}

        </label>
    </div>
)
}
  
