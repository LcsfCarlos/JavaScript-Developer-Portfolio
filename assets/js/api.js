async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/LcsfCarlos/JavaScript-Developer-Portfolio/refs/heads/main/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
