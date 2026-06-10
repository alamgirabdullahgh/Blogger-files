const districtData = {
  "Dhaka": ["ঢাকা", "গাজীপুর", "নারায়ণগঞ্জ", "মুন্সিগঞ্জ", "নরসিংদী", "মানিকগঞ্জ", "ফরিদপুর", "গোপালগঞ্জ", "মাদারীপুর", "রাজবাড়ী", "শরীয়তপুর", "টাঙ্গাইল", "কিশোরগঞ্জ"],
  "Chattogram": ["চট্টগ্রাম", "কক্সবাজার", "বান্দরবান", "রাঙামাটি", "খাগড়াছড়ি", "ফেনী", "লক্ষ্মীপুর", "নোয়াখালী", "চাঁদপুর", "ব্রাহ্মণবাড়িয়া", "কুমিল্লা"],
  "Khulna": ["খুলনা", "বাগেরহাট", "যশোর", "সাতক্ষীরা", "ঝিনাইদহ", "মাগুরা", "নড়াইল", "কুষ্টিয়া", "চুয়াডাঙ্গা", "মেহেরপুর"],
  "Rajshahi": ["রাজশাহী", "চাঁপাইনবাবগঞ্জ", "নাটোর", "নওগাঁ", "পাবনা", "সিরাজগঞ্জ", "বগুড়া", "জয়পুরহাট"],
  "Barishal": ["বরিশাল", "ঝালকাঠি", "পটুয়াখালী", "পিরোজপুর", "বরগুনা", "ভোলা"],
  "Sylhet": ["সিলেট", "সুনামগঞ্জ", "মৌলভীবাজার", "হবিগঞ্জ"],
  "Rangpur": ["রংপুর", "দিনাজপুর", "গাইবান্ধা", "কুড়িগ্রাম", "লালমনিরহাট", "নীলফামারী", "পঞ্চগড়", "ঠাকুরগাঁও"],
  "Mymensingh": ["ময়মনসিংহ", "জামালপুর", "শেরপুর", "নেত্রকোনা"]
};

function toggleAddrSheet() {
  const sheet = document.getElementById('addrSheet');
  sheet.style.display = (sheet.style.display === 'none') ? 'block' : 'none';
  if (sheet.style.display === 'block') renderDivisions();
}

function renderDivisions() {
  const content = document.getElementById('addrContent');
  content.innerHTML = '';
  Object.keys(districtData).forEach(div => {
    let item = document.createElement('div');
    item.className = 'addr-drill-item';
    item.style.padding = '10px';
    item.style.cursor = 'pointer';
    item.style.borderBottom = '1px solid #eee';
    item.textContent = div;
    item.onclick = () => renderDistricts(div);
    content.appendChild(item);
  });
}

function renderDistricts(div) {
  const content = document.getElementById('addrContent');
  content.innerHTML = `<div class="addr-drill-item" onclick="renderDivisions()" style="padding:10px; font-weight:bold; color:#673ab7; cursor:pointer;">◀ Back</div>`;
  districtData[div].forEach(dist => {
    let item = document.createElement('div');
    item.className = 'addr-drill-item';
    item.style.padding = '10px';
    item.style.cursor = 'pointer';
    item.style.borderBottom = '1px solid #eee';
    item.textContent = dist;
    item.onclick = () => {
      document.getElementById('addrInput').value = `${div} - ${dist}`;
      document.getElementById('addrSheet').style.display = 'none';
    };
    content.appendChild(item);
  });
}
