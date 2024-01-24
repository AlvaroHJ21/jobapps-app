import {useState} from 'react';
import {Application} from '../interfaces/Application';

export default function useApplications() {
  const [applications, setApplications] = useState<Application[]>([]);

  async function startLoadApplications() {
    const resp = await fetch(
      'https://jobapps.alvarohuaysara.me/api/applications',
      {
        headers: {
          'Content-Type': 'application/json',
          // Otras cabeceras si son necesarias
        },
      },
    );
    const json = await resp.json();

    console.log(json.length);

    setApplications(json);
  }

  return {applications, startLoadApplications};
}
