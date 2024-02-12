export default function LanguageSwitcher() {
    return (
        <div className="text-md m-3 font-bold text-gray-800 hover:text-gray-900">
            <select >
                <option value='en'>English</option>
                <option value='es'>Español</option>
            </select>
        </div>
    );
}