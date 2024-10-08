"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Input } from "../components/Input";
import MenuItem from "../components/MenuItem";
import SelectComponent from "../components/SelectComponent";
import ThemeToggle from "../components/ThemeToggle";
import { useAppContext } from "../context/AppContext";
import { availableLocales } from "../i18n";
import { useTranslation } from "@/app/i18n/useTranslation";

export const MODEL_OPTIONS = [
  // { "value": "gpt-3.5-turbo", "label": "GPT-3.5 Turbo" },
  // { "value": "gpt-4", "label": "GPT-4" },
  // { "value": "gpt-4-turbo", "label": "GPT-4 Turbo" },
  // { value: "gpt-4", label: "GPT-4" },
  { value: "gpt-4o", label: "GPT-4o" },
  { value: "gpt-4o-mini", label: "GPT-4o Mini" },
  { value: "claude-3.5-opus", label: "Claude 3.5 Opus" },
  { value: "claude-3.5-sonnet", label: "Claude 3.5 Sonnet" },
  { value: "claude-3.5-haiku", label: "Claude 3.5 Haiku" },
];

export function SettingsUi() {
  const {
    phraseRange,
    setPhraseRange,
    allPhrases,
    locale,
    setLocale,
    availablePhraseTranslation,
    phraseTranslation,
    setPhraseTranslation,
    targetLanguage,
    sourceLanguage,
    handleReverseLang,
    maxNumberOfWordsInPhrase,
    setMaxNumberOfWordsInPhrase,
    llmApiKey,
    setLlmApiKey,
    llmModel,
    setLlmModel,
    googleTranslatorApiKey,
    setGoogleTranslatorApiKey,
  } = useAppContext();
  const t = useTranslation();

  const handleRangeChange = (event) => {
    const { name, value } = event.target;
    const newRange = [...phraseRange];
    if (name === "start") {
      newRange[0] = Number(value);
    } else {
      const val = Math.min(allPhrases.length, value);
      newRange[1] = Number(val);
    }
    if (isNaN(newRange[0]) || isNaN(newRange[1])) {
      return;
    }
    setPhraseRange(newRange);
  };

  const handleMaxWordsChange = (event) => {
    const value = Number(event.target.value);
    if (!isNaN(value) && value > 0) {
      setMaxNumberOfWordsInPhrase(value);
    } else {
      setMaxNumberOfWordsInPhrase(null);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 bg-muted p-2 rounded">
        {t("settings_title")}
      </h1>

      <div className="mb-6">
        <h2 className="text-xl mb-2">{t("locale_change_title")}</h2>
        <SelectComponent
          options={availableLocales.map((locale) => ({
            value: locale,
            label: locale,
          }))}
          value={locale}
          onChange={(value) => setLocale(value)}
        />
      </div>

      <div className="mb-6">
        <MenuItem>
          <ThemeToggle className="">
            <div className="text-xl mb-2">{t("toggle_theme")}</div>
          </ThemeToggle>
        </MenuItem>
      </div>

      <div className="mb-6">
        <h2 className="text-xl mb-2">{t("phrase_range_title")}</h2>
        <div className="flex space-x-2">
          <label>
            {t("start")}:
            <Input
              size="4"
              name="start"
              value={phraseRange[0]}
              onChange={handleRangeChange}
            />
          </label>
          <label>
            {t("end")}:
            <Input
              size="4"
              name="end"
              value={phraseRange[1]}
              onChange={handleRangeChange}
            />
          </label>
        </div>
        {phraseRange[0] >= phraseRange[1] && (
          <div className="text-red-500">{t("start_must_be_less_than_end")}</div>
        )}
        <div className="text-sm">{t("phrase_range_description")}</div>
        <button
          className="mt-2 px-3 py-1 bg-card text-card-foreground rounded hover:bg-pHov"
          onClick={() => setPhraseRange([0, allPhrases.length])}
        >
          {t("reset_phrase_range")}
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl mb-2">{t("available_phrase_translation")}</h2>
        <SelectComponent
          options={availablePhraseTranslation.map((phraseTranslation) => ({
            value: phraseTranslation,
            label: phraseTranslation,
          }))}
          value={phraseTranslation}
          onChange={(value) => setPhraseTranslation(value, true)}
        />
        <div className="">
          <div className="flex space-x-2 w-[50%] text-sm">
            <div className="flex-1">Source: </div>
            <div className="flex-1"> </div>
            <div className="flex-1">Target: </div>
          </div>
          <div className="flex space-x-2 w-[50%] font-bold">
            <div className="flex-1">{sourceLanguage}</div>
            <div className="flex-1">{"->"}</div>
            <div className="flex-1">{targetLanguage}</div>
          </div>
          <div
            className="p-2 flex space-x-2 cursor-pointer"
            onClick={handleReverseLang}
          >
            <ArrowPathIcon className="w-6" />{" "}
            <div className="">Reverse languages</div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl mb-2">{t("max_words_in_phrase")}</h2>
        <Input
          type="number"
          min="0"
          value={maxNumberOfWordsInPhrase}
          onChange={handleMaxWordsChange}
        />
        <div className="text-sm">{t("max_words_description")}</div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl mb-2">{t("llm_settings")}</h2>
        <div className="space-y-2">
          <div>
            <label htmlFor="llmApiKey" className="block text-sm font-medium">
              {t("llm_api_key")}:
            </label>
            <Input
              // type="password"
              id="llmApiKey"
              value={llmApiKey}
              onChange={(e) => setLlmApiKey(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="llmModel" className="block text-sm font-medium">
              {t("llm_model")}:
            </label>
            <SelectComponent
              id="llmModel"
              options={MODEL_OPTIONS}
              value={llmModel}
              onChange={(value) => setLlmModel(value)}
              className="mt-1"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl mb-2">{t("google_translator_settings")}</h2>
        <div>
          <label
            htmlFor="googleTranslatorApiKey"
            className="block text-sm font-medium"
          >
            {t("google_translator_api_key")}:
          </label>
          <Input
            type="password"
            id="googleTranslatorApiKey"
            value={googleTranslatorApiKey}
            onChange={(e) => setGoogleTranslatorApiKey(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      {/* ... rest of the existing UI elements ... */}
    </div>
  );
}
