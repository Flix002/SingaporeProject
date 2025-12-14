import React, { useEffect, useState } from 'react';
import { listCourses } from '../api/coursesApi';

function simpleMatchAnswer(question, courses) {
  const q = (question || '').toLowerCase();
  if (!q || q.trim().length === 0) return null;

  // direct intents
  if (q.includes('price') || q.includes('cost') || q.includes('fee')) {
    // return price info for matching course or list prices
    const matched = courses.filter(c => q.includes((c.title || '').toLowerCase()) || q.includes((c.description || '').toLowerCase()));
    if (matched.length > 0) {
      return matched.map(c => `${c.title}: ${c.price ? '$' + c.price : 'Free'}`).join('\n');
    }
    return courses.map(c => `${c.title}: ${c.price ? '$' + c.price : 'Free'}`).slice(0, 6).join('\n');
  }

  if (q.includes('parts') || q.includes('lessons') || q.includes('sections')) {
    const matched = courses.filter(c => q.includes((c.title || '').toLowerCase()));
    if (matched.length > 0) return matched.map(c => `${c.title}: ${c.parts || 1} parts`).join('\n');
    return courses.map(c => `${c.title}: ${c.parts || 1} parts`).slice(0,6).join('\n');
  }

  if (q.includes('enroll') || q.includes('subscribe') || q.includes('join')) {
    return 'To enroll, open the course page and click Subscribe. For paid courses we support 2-part payment or full payment. Sign in first.';
  }

  // match by title keywords
  const words = q.split(/[^a-z0-9]+/).filter(Boolean);
  const scores = courses.map(c => {
    const text = ((c.title || '') + ' ' + (c.description||'')).toLowerCase();
    let s = 0;
    for (const w of words) if (text.includes(w)) s += 1;
    return { course: c, score: s };
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);

  if (scores.length > 0) {
    const top = scores.slice(0,3).map(s => `${s.course.title}: ${s.course.description || ''} — Price: ${s.course.price? '$'+s.course.price:'Free'}`);
    return top.join('\n\n');
  }

  return null;
}

export default function FAQ() {
  const [courses, setCourses] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=>{ listCourses().then(setCourses).catch(()=>setCourses([])); }, []);

  const handleAsk = () => {
    setLoading(true);
    // simple local matching first
    const local = simpleMatchAnswer(question, courses);
    if (local) {
      setAnswer(local);
      setLoading(false);
      return;
    }

    // fallback: provide a helpful generic response
    const generic = 'I could not find an exact answer. Here are featured courses:\n' + courses.slice(0,5).map(c=>`${c.title} — ${c.price? '$'+c.price:'Free'}`).join('\n');
    setAnswer(generic);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white/5 rounded shadow">
      <h3 className="text-2xl font-semibold text-white mb-3">Ask about our courses</h3>
      <p className="text-sm text-white/70 mb-4">Type your question (price, parts, enroll, or course name) and get an instant answer.</p>

      <div className="flex gap-2">
        <input value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Ask a question about courses..." className="flex-1 px-3 py-2 rounded bg-white/5 text-white" />
        <button onClick={handleAsk} className="px-4 py-2 bg-blue-600 rounded text-white">Ask</button>
      </div>

      <div className="mt-4">
        {loading ? <div className="text-white/70">Thinking...</div> : (
          answer ? (
            <pre className="whitespace-pre-wrap text-sm text-white/90 bg-white/2 p-3 rounded">{answer}</pre>
          ) : (
            <div className="text-white/60">No answer yet — try asking about price, parts, or enroll.</div>
          )
        )}
      </div>

      <div className="mt-6 text-sm text-white/60">
        <div className="font-medium text-white mb-1">Featured courses</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {courses.slice(0,4).map(c => (
            <div key={c.id} className="p-3 bg-white/3 rounded">
              <div className="font-semibold text-white">{c.title}</div>
              <div className="text-sm text-white/70">{c.description}</div>
              <div className="text-sm text-white/70 mt-1">Price: {c.price? '$'+c.price : 'Free'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
